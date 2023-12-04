<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                address: "",
                error: ""
            }
        },
        methods: {
            locatorButton(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            this.getAddresFrom(position.coords.latitude,position.coords.longitude);
                            // this.showUserLocation(position.coords.latitude,position.coords.longitude);
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                    },
                    error => {
                        this.error = error.message;
                        console.log(error.message);
                    }
                    );
                }
                else {
                    console.log("not supported error");
                }
            },
            getAddresFrom(lat, long){
                axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
                + lat +
                ","
                + long 
                +"&key=AIzaSyD9HupIM7z4PPAuRCnY53LKZpbQnJ6Q87Q")
                .then(response => {
                    if(response.data.error_message){
                        this.error = response.data.error_message;
                        console.log(response.data.error_message);
                    }
                    else {
                        this.address = response.data.results[0].formatted_message;
                    }
                })
                .catch(error =>{
                    this.error = error.message;
                    console.log(error.message);
                })
            },
        }
    }

</script>

<style></style>