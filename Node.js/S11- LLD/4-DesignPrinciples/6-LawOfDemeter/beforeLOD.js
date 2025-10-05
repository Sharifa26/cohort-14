class Address{
    constructor(street, city){
        this.street = street;
        this.city = city;
    }
    getCity(){
        return this.city;
    }
}

class Customer{
    constructor(name, address,currentAddress){
        this.currentAddress = currentAddress;
        this.name = name;
        this.address = address;//premanent address
    }
    getAddress(){
        return this.address;
    }
    getCurrentAddress(){
        return this.currentAddress;
    }
    getName(){
        return this.name;
    }
}

class Order{
    constructor(customer){
        this.customer = customer;
    }

    printShippingLabel(){
        console.log(this.customer.address.city);
    }
}

