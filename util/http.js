import axios from "axios";

function storeRegistrationData(registrationData) {
    axios.post('https://react-native-course-bef50-default-rtdb.firebaseio.com/registrations.json', registrationData);
}

export { storeRegistrationData };