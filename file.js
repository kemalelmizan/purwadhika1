const Palindrome = kata => {
  const karakter = kata
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  console.log(karakter);

  if (karakter.join("") === karakter.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
const hasil = Palindrome("Siang");
console.log(hasil);
