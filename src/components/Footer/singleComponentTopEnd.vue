<script>


export default {
    data() {
        return {
        };
    },
    props: {
        finalDataMedical: Array
    },
    components: {
    },
    methods: {
        
    },
};
</script>

<template>
    <div class="pt-5 ps-5">
        
        <h4 class="text-uppercase">
            medicall departements
        </h4>

        <hr class="barFooterAqua">

        <div class="accordion pe-3 pt-3 pb-5" id="accordionExample">
            <div v-for="(element, index) in finalDataMedical" :key="index" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index " aria-expanded="false" :aria-controls="'collapse' + index">
                        {{element.category}}
                    </button>
                </h2>
                <div :id="'collapse' + index" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body p-0">
                        <button v-for="info in element.info1" :key="info"
                            class="w-100 text-start py-3 ps-3 buttonTopEnd">
                            {{ info }}
                        </button>
                        <!-- <ul>
                            <li v-for="info in element.info1" :key="info">{{ info }}</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="pb-5 buttonFooterTop">
            <button class="btn text-uppercase py-2 px-5 rounded-0">
                view our departements
            </button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;

.barFooterAqua {
    width: 40px;
    border: 2px solid $colorGeneralAqua;
    opacity: 1;
}

.iconeCenterFooter {
    padding-top: 30px;
    p {
        padding: 5px 0;
        i {
            color: $colorGeneralAqua;
        }
    }
}

.buttonFooterTop {
    button {
        border: 1px solid black;
        &:hover {
            background-color: $colorGeneralAqua;
            color: white;
            border-color: $colorGeneralAqua;
        }
    }
}

.buttonTopEnd {
    background-color: azure;
    border: none;

    &:hover {
        background-color: $colorGeneralLightBlu;
    }
}
</style>
