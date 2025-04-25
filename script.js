
$(document).ready(function() {

    function getItemDetails(itemId) {

        const itemDetails = {
            "appetizer1": { name: "Garlic Bread", description: "Warm and crusty bread topped with garlic butter and herbs.", price: "$5.99", ingredients: ["Bread", "Garlic", "Butter", "Parsley"] },
            "appetizer2": { name: "Spring Rolls", description: "Delicate rice paper rolls filled with fresh vegetables and served with a sweet chili sauce.", price: "$6.50", ingredients: ["Rice Paper", "Carrots", "Cabbage", "Bell Peppers"] },
            "main1": { name: "Pasta Carbonara", description: "A classic Roman pasta dish made with spaghetti, eggs, Pecorino Romano cheese, cured pork (guanciale or pancetta), and black pepper.", price: "$12.99", ingredients: ["Spaghetti", "Eggs", "Pecorino Romano", "Pancetta", "Black Pepper"] },
            "main2": { name: "Grilled Salmon", description: "Flaky grilled salmon fillet seasoned with lemon and herbs, served with a side of roasted asparagus and cherry tomatoes.", price: "$15.50", ingredients: ["Salmon", "Asparagus", "Cherry Tomatoes", "Lemon", "Herbs"] },
            "dessert1": { name: "Chocolate Cake", description: "A decadent chocolate cake with a rich ganache frosting, served with a scoop of vanilla bean ice cream.", price: "$7.00", ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Vanilla", "Ice Cream"] },
            "dessert2": { name: "Tiramisu", description: "An elegant Italian dessert made with ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, and flavored with cocoa.", price: "$6.75", ingredients: ["Ladyfingers", "Coffee", "Mascarpone", "Eggs", "Sugar", "Cocoa"] },
            "beverage1": { name: "Iced Tea", description: "A chilled and refreshing classic iced tea.", price: "$3.00", ingredients: ["Brewed Tea", "Ice"] },
            "beverage2": { name: "Lemonade", description: "A sweet and tart homemade lemonade, perfect for a warm day.", price: "$3.50", ingredients: ["Lemons", "Sugar", "Water", "Ice"] }

        };
        return itemDetails[itemId];
    }


    $(".view-details-btn").click(function() {
        const itemId = $(this).data("item-id");
        const details = getItemDetails(itemId);

        if (details) {
            const modalTitle = $("#itemDetailsModalLabel");
            const modalBody = $("#itemDetailsContent");

            modalTitle.text(details.name);
            modalBody.html(`
                <p><strong>Description:</strong> ${details.description}</p>
                <p><strong>Price:</strong> ${details.price}</p>
                <p><strong>Ingredients:</strong> ${details.ingredients.join(", ")}</p>
            `);
            $("#itemDetailsModal").modal("show");
        }
    });
});
