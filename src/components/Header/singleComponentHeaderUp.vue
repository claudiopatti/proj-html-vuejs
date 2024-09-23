<script>


export default {
    data() {
        return {};
    },
    components: {
    },
    methods: {
        
    },

    props: {
        departments: Array
    }
};
</script>

<template>

    <div>
        <a href="#">
            <img src="../../assets/img/medical_logo_1x_light.png" alt="logo-medical">
            
        </a>
    </div>

    <div class="linkNav d-flex listMenu">
        <ul class="navbar-nav d-flex flex-row p-3">
            <li class="nav-item px-3">
                
                <a class="nav-link textColorAqua text-uppercase" href="#">home</a>
                
            </li>
            <li class="nav-item px-3">

                <a class="nav-link text-uppercase" href="#">about</a>

            </li>
            <li class="nav-item px-3">
                <div class="btn-group mt-1">
                    <button class="btn text-bottom btn-sm dropdown-toggle fs-6 border-0 text-uppercase" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        departments
                    </button>
                    <ul class="dropdown-menu py-0 ">
                        <li v-for="department in departments" :key="department"><button class="dropdown-item p-3" type="button">{{ department }}</button></li>
                    </ul>
                </div>

            </li>
            <li class="nav-item px-3">
                <a class="nav-link text-uppercase" href="#">articles</a>

            </li>
        </ul>

        <div class="buttonMakeAppointment">
            <button class="btn my-3 px-3 py-2 text-uppercase text-withe btn-primary border-0">
                make appointment
            </button>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;

.listMenu {
    .textColorAqua{
        color: $colorGeneralAqua;
    }
    .buttonMakeAppointment {
        button {
        background-color: $colorGeneralAqua;
        
        &:hover {
            background-color: $colorGeneralBlu;
        }
    }
    }
    ul {
        li {
            a {
                color: white;
                
                &:hover {
                    color: $colorGeneralAqua;
                    
                }
            }

            .btn-group {
                .dropdown-toggle {
                    color: white;
                    &:hover {
                        color: $colorGeneralAqua;
                    }
                }

                .dropdown-menu {
                    button {
                    &:hover {
                        background-color: $colorGeneralAqua;
                    }
                }
                }
            }
        }
    }
    
}
</style>