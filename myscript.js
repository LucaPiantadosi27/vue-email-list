// generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// -----//



const { createApp } = Vue;

// Creo un'applicazione Vue utilizzando "createApp"che genera un indirizzo email casualmente tramite una richiesta API. 
const generator = createApp({
    data() {
        return {
            title: 'Random Mail Generator:',
            mailList: [],
            requiredMails: 10,

        };
    },

    methods: {},

    // effettuo una richiesta HTTP GET utilizzando Axios
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

         // la richiesta ha successo, viene ricevuta la risposta e viene recuperato l'indirizzo email   
        const mail = response.data.response; 
            this.mailList.push(mail);
        })
    },

});
generator.mount('#generator');