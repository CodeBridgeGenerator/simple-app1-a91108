
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerId: faker.lorem.sentence(""),
vehicleId: faker.lorem.sentence(""),
serviceDate: faker.lorem.sentence(""),
totalAmount: faker.lorem.sentence(""),
paymentStatus: faker.lorem.sentence(""),
paymentMethod: faker.lorem.sentence(""),
notes: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
