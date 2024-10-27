export class SlotMachine {
    private coinAccount: number; // Variable de instancia para almacenar las monedas acumuladas
    constructor ( ) {
        this.coinAccount = 0; // Inicializa las monedas en 0
    }
    // Método para generar las posiciones de la ruleta
    private positionRoulette = ( ) : boolean [ ] => {
        let roulette = [ ];
        let numRandom;
        for ( let i=0; roulette.length < 3; i++) {
            numRandom = Math.round( Math.random( ));
             if ( numRandom) {
                roulette[i] = true;
             } else {
                roulette[i] = false;
             }
        }
        return roulette;
}
    // Método para verificar si todos los valores en la ruleta son true
    private valueRoulette = ( roulette : boolean [ ] ) : boolean => roulette.every( position => position === true);

    // Método principal que reproduce lo que sucede cuando el usuario juega
    public play = (  ) : string => {
    let message;
    this.coinAccount++;
    if ( this.valueRoulette(this.positionRoulette( )) ) { 
        message = `Congratulations!!!. You won ${this.coinAccount} coins!!`;
        this.coinAccount = 0;
        
    } else {
        message = `Good luck next time!! Coins accumulated: ${this.coinAccount}`;
    }
    return message;
};
}

