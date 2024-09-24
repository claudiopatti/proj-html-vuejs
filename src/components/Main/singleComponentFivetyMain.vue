<script>
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
            nameAppointment: '',
            emailAppointment: '',
            phoneNumberAppointment: '',
            dateAppointment: 0,
            textAppointment: '',
        };
    },
    components: {
    },
    methods: {
        pushAppointmentStore() {
            console.log(this.nameAppointment);
            console.log(this.emailAppointment);
            console.log(this.phoneNumberAppointment);
            console.log(this.dateAppointment);
            console.log(this.textAppointment);
            if (this.nameAppointment != '' && this.emailAppointment != '' && this.phoneNumberAppointment != '' && this.dateAppointment != 0 &&  this.textAppointment != '') {
                this.store.appointment.push({
                    name: this.nameAppointment,
                    email: this.emailAppointment,
                    phoneNumber: this.phoneNumberAppointment,
                    date: this.dateAppointment,
                    text: this.textAppointment,
                })
                this.nameAppointment = '';
                this.emailAppointment = '';
                this.phoneNumberAppointment = '';
                this.dateAppointment = 0;
                this.textAppointment = '';

                alert('Appointment Send At Avada Health')


            }
            
            console.log(this.store.appointment);
            
            
            
        }
    },
};
</script>

<template>
    <div class="backgroundComponentFivety">
        
        <div class="container py-5">
    
            <div class="text-center pt-4 text-white">
    
                <p class="fs-2 fw-light">Make An Appointment</p>

                <div class="d-flex justify-content-center">
                    <hr class="barMain">

                </div>

                <p class="pt-3 lh-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br>
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br>
                    inventore veritatis et quasi architecto beatae
                </p>
    
            </div>

            <form @submit.prevent="pushAppointmentStore()">
                <div class="row py-5">
                    <div class="col-12 col-sm-6 ">
                        <input v-model.trim="nameAppointment" class=" w-100 ps-3 py-2" type="text" placeholder="Name*" required>
                    </div>
                    <div class="col-12 col-sm-6">
                        <input v-model.trim="emailAppointment" class=" w-100  ps-3 py-2" type="email" placeholder="Email*" required>
                    </div>
                </div>
                <div class="row pb-5">
                    <div class="col-12 col-sm-6">
                        <input v-model.trim="phoneNumberAppointment" class=" w-100  ps-3 py-2" type="number" placeholder="Phone number*" required>
                    </div>
                    <div class="col-12 col-sm-6">
                        <input v-model.trim="dateAppointment" class=" w-100  ps-3 py-2" type="date" required>
                    </div>
                </div>

                <div >
                    <textarea v-model.trim="textAppointment" class="w-100 ps-3 py-2" rows="4" cols="50" type="text" placeholder="Can I help you?!*" required></textarea>
                </div>

                <button class="btn my-3 text-uppercase text-white fw-bold w-100">
                    make an appointment
                </button>
            </form>

            
        </div>
    
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;
@use '../../assets/scss/partials/variables' as *;

.barMain {
    width: 200px;
    border: 1.5px solid white;
    opacity: 1;
}

.backgroundComponentFivety {
    background-image: url(../../assets/img/make-an-appointment.jpg);
    width: 100%;
    background-position: center;
    background-size: cover;
    
    .container{
        padding: 0 200px;

        form {
            input , textarea {
                background: transparent;
                border: 1px solid white;
                color: white ;
                &:hover {
                    border: 1px solid  $colorGeneralAqua;
                    transform: scaleX(1.1);
                }
            }

            button {
                background-color: $colorGeneralAqua;
                
                &:hover {
                    background-color: $colorGeneralBlu;
                }
            }
        }
    }
}



</style>
