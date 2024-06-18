import { faker} from "@faker-js/faker";

export class UserBuilder {
    private postcode?: string;
    private firstname?: string;
    private lastname?: string;
    private depositeamount?: string;

    public addFirstName(): this {
        this.firstname = faker.name.firstName();
        return this;
    }

    public addLastName(): this {
        this.lastname = faker.name.lastName();
        return this;
    }

    public depositeAmount(): this {
        this.depositeamount = faker.finance.amount({ min: 500, max: 2000, dec: 0 });
        return this;
    }

    public postCode(): this {
        this.postcode = faker.finance.amount({ min: 54521, max: 82225, dec: 0 });
        return this;
    }


}