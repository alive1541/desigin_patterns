export class Singleton {
  constructor() {}
  private static instance: Singleton | null = null;
  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
