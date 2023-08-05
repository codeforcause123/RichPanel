const Stripe = require("stripe")
const stripe = Stripe("sk_test_51NbcodSBuYqweobIsyV0uhT1AzwvERZfaE4ihAJPaZICSLn6jgXUBdxDhNUDRqSDdPhRX3dO9WCBNc9VajRnZW4n00Z1hd4y2c");

const addNewCustomer = async (email, desc, name) => {
    const customer = await stripe.customers.create({
        email: email,
        name: name,
        description: desc,
    });
    return customer;
}

const createCheckoutSession = async (customer, priceID) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: customer,
        line_items: [
            {
                price: priceID,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: 'https://richpanelfront.vercel.app/success',
        cancel_url: 'https://richpanelfront.vercel.app/failure',
    });
    return session;
}

const getCustomer = async (customerID) => {
    const customer = await stripe.customers.retrieve(customerID);
    return customer;
}

const cancelSubscription = async (custID) => {
    const subscriptions = await stripe.subscriptions.list({
        customer: custID,
    });
    try {
        const subID = subscriptions["data"][0]["id"];
        console.log(subID);
        const session = await stripe.subscriptions.del(subID);
        return session;
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    addNewCustomer,
    createCheckoutSession,
    getCustomer,
    cancelSubscription
}