export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  static fail(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }
}
