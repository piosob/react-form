function isBlank(text) {
  if (text) return text.trim().length === 0
  else return null
}

export function validate(values) {
  console.log(values);
  const { nameSurname, email, password, password2, sex, adress, postCode, city } = values;
  const errorMessages = {}
  if (isBlank(nameSurname) || nameSurname?.length < 5) {
    errorMessages.nameSurname = 'Name and surname can not be empty and must be more than 5 characters'
  }
  if (isBlank(email) || !email?.includes('@') || email?.length < 4) {
    errorMessages.email = 'Email can not be empty and must be more than 4 characters and @ char'
  }
  if (isBlank(password) || password?.length < 4) {
    errorMessages.password = 'Password can not be empty and must be more than 4 characters'
  }
  if (password2 !== password) {
    errorMessages.password = 'Passwords must be the same'
  }
  if (!sex) {
    errorMessages.sex = 'Gender must be chosen'
  }
  if (isBlank(adress) || adress?.length < 3) {
    errorMessages.adress = 'Adress can not be empty and must be more than 3 characters'
  }
  if (isBlank(postCode) || postCode?.length < 6) {
    errorMessages.postCode = 'Postcode can not be empty and must be more than 6 characters'
  }
  if (isBlank(city) || city?.length < 2) {
    errorMessages.city = 'City can not be empty and must be more than 2 characters'
  }

  if (Object.values(errorMessages).length > 0) return errorMessages;
  else return null

}

