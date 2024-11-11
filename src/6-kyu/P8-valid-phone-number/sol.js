function validPhoneNumber(phoneNumber){
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phonePattern.test(phoneNumber);
  }