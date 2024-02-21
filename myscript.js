// generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// -----//





const { createApp } = Vue;
//creo un 'applicazione Vueutilizzando "createApp"che genera un indirizzo email casuale
const generator = createApp({
    data() {
        return {
            title: 'Random Mail Generator',
            mailList: [],
            requiredMails: 10,

        };
    },

    methods: {},
    
    // effettuo una richiesta HTTP GET utilizzando Axios
    mounted() {
        // uso un for per generare più mail
        for (let i = 0; i < this.requiredMails; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const mail = response.data.response;
                this.mailList.push(mail);
            });
        }
    },

});
generator.mount('#generator');