const KEY = 'page-has-been-force-refreshed';

export async function Retry<T>(DynamicImport: () => Promise<T>): Promise<T> {
  let pageHasAlreadyBeenForceRefreshed: Boolean = true;

  try {
    pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem(KEY) ?? 'false',
    );

    const component = await DynamicImport();
    window.localStorage.setItem(KEY, 'false');

    return component;
  } catch (error) {
    if (!pageHasAlreadyBeenForceRefreshed) {
      window.localStorage.setItem(KEY, 'true');
      window.location.reload();
    }

    throw error;
  }
}
