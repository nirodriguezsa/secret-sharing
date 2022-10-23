export function welcome(): void {
  console.log(
    '\x1b[36m',
    `
    ███╗░░██╗██████╗░░██████╗
    ████╗░██║██╔══██╗██╔════╝
    ██╔██╗██║██████╔╝╚█████╗░
    ██║╚████║██╔══██╗░╚═══██╗
    ██║░╚███║██║░░██║██████╔╝
    ╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░
      Welcome to ${process.env.X_APPLICATION_ID}`,
    '\x1b[0m',
  );
}