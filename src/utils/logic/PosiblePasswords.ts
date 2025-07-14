export const possiblePasswords = (): string[] => {
  const keywords = [
    "Alpha",
    "Binary",
    "Cyber",
    "Delta",
    "Echo",
    "Fusion",
    "Gamma",
    "Hex",
    "Ion",
    "Jet",
    "Kilo",
    "Logic",
    "Matrix",
    "Nova",
    "Omega",
    "Photon",
    "Quantum",
    "Rocket",
    "Secure",
    "Turbo",
    "Ultra",
    "Vector",
    "Warp",
    "Xeno",
    "Yield",
    "Zenith",
  ];

  const numbers = () => {
    const numArray = [];
    for (let i = 0; i <= 9; i++) {
      numArray.push(i.toString());
    }
    return numArray;
  };
  const symbols = ["!", "@", "#", "$", "%", "*", "?", "_", "&", "-"];

  const getRandomItem = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const passwords: string[] = [];

  for (let i = 0; i < 3; i++) {
    const password = `${getRandomItem(keywords)}${getRandomItem(
      symbols
    )}${getRandomItem(numbers())}${getRandomItem(numbers())}${getRandomItem(
      keywords
    )}${getRandomItem(numbers())}`;
    passwords.push(password);
  }

  return passwords;
};
