// --------------------------------question 1------------------------
function creategreeting(name) {
    return function () {
        console.log("welcome," + name);
    }
}

const greetraj = creategreeting("raj");
const greetpriya = creategreeting("priya");
greetraj();
greetpriya();

// -------------------------------question 2--------------------
function createMessage() {
    let message = "hello world";

    return {
        show: function () {
            console.log(message);
        },

        update: function () {
            message = "updated message";
        }
    };
}

const messageaction = createMessage();

messageaction.show();
messageaction.update();
messageaction.show();




