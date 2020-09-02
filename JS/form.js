class Form {

    constructor() {

        this.title = createElement('h1');
        this.button = createButton('Play');
        this.input = createInput('Name');
        this.greeting = createElement('h2');
        this.reset = createButton('Reset');

    }

    hide() {

        this.title.hide();
        this.input.hide();
        this.button.hide();

    }

    display() {

        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 50);

        this.input.position(displayWidth/2 - 50, displayHeight/2 - 100);

        this.button.position(displayWidth/2 - 30, displayHeight/2 - 50);
        this.button.mousePressed(() => {
            
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount ++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Welcome" + player.name);
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        });

    }
    
}