export class Cli {
  config: Config;
  constructor(config: Config) {
    this.config = config;
  }
  build() {
    const ans = new Analysis(this.config, "build");
    const loader = new Loader();
    const plugin = new Plugin();

    const entry = ans.getEntry();
    loader.useLoaders(entry);
    plugin.usePlugins();
  }

  dev() {
    const ans = new Analysis(this.config, "dev");
    const loader = new Loader();
    const plugin = new Plugin();
    const server = new DevServer();

    const entry = ans.getEntry();
    loader.useLoaders(entry);
    plugin.usePlugins();

    server.startServer();
  }
}

interface Config {
  entry: string;
  loader: any;
  plugin: any;
}

class Analysis {
  config: Config;
  constructor(config: Config, type: string) {
    this.config = config;
  }
  getEntry() {
    return this.config.entry;
  }
}

class Loader {
  useLoaders(entry: string) {
    console.log("执行各种loader");
  }
}

class Plugin {
  usePlugins() {
    console.log("执行各种plugin");
  }
}

class DevServer {
  startServer() {
    console.log("启动了dev服务器");
  }
}
