new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns= [];
        },
        
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) +1, min)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.monsterHealth<=0) {
                this.monsterHealth=0;
                this.gameIsRunning = false;
                alert('You Won!!!');
                return;
            }
            
            var max1 = 8;
            var min1 = 2;
            var damage1 = Math.max(Math.floor(Math.random() * max1) +1, min1)
            this.playerHealth -= damage1;
            this.turns.unshift({
                isMonster: true,
                text: 'Monster hits Player for ' + damage1
            });
            if (this.playerHealth<=0) {
                this.playerHealth=0;
                this.gameIsRunning = false;
                alert('You Lost!!!');
                return;
            }
        },
            
        specialAttack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) +1, min)
            this.playerHealth -= damage;
            this.turns.unshift({
                isMonster: true,
                text: 'Monster hits Player for ' + damage
            });
            if (this.monsterHealth<=0) {
                    this.monsterHealth=0;
                    this.gameIsRunning = false;
                    alert('You Won!!!');
                    return;
                }
            
            var max1 = 20;
            var min1 = 10;
            var damage1 = Math.max(Math.floor(Math.random() * max1) +1, min1)
            this.monsterHealth -= damage1;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player strikes with a special attack ' +damage1
            });
                
        },
        heal: function () {
            var max = 55;
            var min = 5;
            var heals = Math.max(Math.floor(Math.random() *max) +1, min)
            this.playerHealth += heals;
                if (this.playerHealth > 100){
                    this.playerHealth = 100;
                }
            this.turns.unshift({
                isGame: true,
                text: 'Healed by ' + heals
            })
            },
        giveUp: function () {
            this.gameIsRunning = false,
            alert('You quit! Start a new game');
            return;
        }
    }
});