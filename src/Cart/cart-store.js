import { writable } from "svelte/store";

function createCart() {
  const cart = writable([
    {
      id: "p3",
      title: "Test",
      price: 9.99,
    },
    {
      id: "p4",
      title: "Test",
      price: 9.99,
    },
  ]);
  return {
    subscribe: cart.subscribe,
    addItem: (item) => {
      cart.update((items) => {
        if (items.find((i) => i.id === item.id)) {
          return [...items];
        }

        return [...items, item];
      });
    },
    removeItem: (itemId) => {
      cart.update((items) => items.filter((i) => i.id != itemId));
    },
  };
}

export default createCart();
