const {createApp} = Vue;

createApp({
    data(){
        return{
            monedas:"",
            bpi:[]
            

        }
    },
    created(){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(data => {
              console.log(data)
              this.monedas = data.chartName;
              this.bpi = data.bpi;
            
        })     
        .catch(error => console.log(error));
    }
}).mount("#app");