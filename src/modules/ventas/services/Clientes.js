import axios from 'axios';

const customerEndPoint = 'http://localhost:8080/clientes/';
const customers = [];

export function getCustomers() {
    return axios.get(customerEndPoint);
}

export function searchCustomers(term) {
    return axios.get(customerEndPoint + 'search/' + term);
}

export function setCustomer(customer) {
     return axios.post('http://localhost:8080/clientes/', customer);
}

export function getCustomerByCif(cif) {
    let customerFounded = customers.filter(elem => elem.cif === cif);    
    return customerFounded[0];
}