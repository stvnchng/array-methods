/**
 *  https://leetcode.com/problems/unique-email-addresses/
 **/
const numUniqueEmails = (emails) => {
  const uniqueEmails = new Set();
  for (const email of emails) {
    let [local, domain] = email.split("@");
    local = local.split("+")[0].split(".").join("");
    uniqueEmail = local + "@" + domain;
    uniqueEmails.add(uniqueEmail);
  }
  return uniqueEmails.size;
};
