const pizzasArray = [
    {
        id: 0,
        name: 'The Pear Necessities',
        toppings: ['Pear', 'Sweet Potato', 'Spinach', 'Honey']
    },
    {
        id: 1,
        name: 'Cluck Norris',
        toppings: ['Chicken', 'Onion', 'Hot Peppers']
    },
    {
        id: 2,
        name: 'Here Comes Truffle!!',
        toppings: ['Roasted Garlic', 'Mushrooms', 'Truffle']
    },
    {
        id: 3,
        name: 'The Bee Sting',
        toppings: ['Soppressata', 'Honey']
    },
    {
        id: 4,
        name: 'Piggy Smalls',
        toppings: ['Pulled Pork', 'Pepperoni', 'Bacon', 'Sausage', 'Onion']
    },
    {
        id: 5,
        name: 'Dough Exotic',
        toppings: ['Steak', 'Sardine Oil', 'Chimichurri']
    },
    {
        id: 6,
        name: 'Holy Shiitake',
        toppings: ['Roasted Garlic', 'Mushrooms', "Onion", 'Truffle']
    },
    {
        id: 7,
        name: 'The Friendship Ender',
        toppings: ['Pineapple', 'Ham', 'Hot Peppers']
    },
];

const countPizzasToppings = (pizzas) => {
    const counts = pizzas
                        .map(pizza => pizza.toppings)
                        .flat()
                        .reduce((allToppings, topping, i) => {
                            const existingTopping = allToppings[topping];
                            if (existingTopping) {
                                existingTopping.count += 1;
                            } else {
                                allToppings[topping] = {
                                    id: `${i}`,
                                    name: topping,
                                    count: 1
                                }
                            }
                            return allToppings
                        }, {});
    
    const sortedToppings = Object.values(counts).sort((a,b) => b.count - a.count);
    return sortedToppings;
}

const toppingsWithCount = countPizzasToppings(pizzasArray);
