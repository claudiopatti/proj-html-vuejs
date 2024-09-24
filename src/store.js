import { reactive } from "vue";

export const store = reactive ({
    cardDoctors: [
        {
            image: "/src/assets/img/doctor-1.jpg",
            name: 'jhon show',
            work: 'Anesthesiologist',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ',
        },
        {
            image: "/src/assets/img/doctor-2.jpg",
            name: 'tony stark',
            work: 'Cardiologist',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ',
        },
        {
            image: "/src/assets/img/doctor-3.jpg",
            name: 'anna smith',
            work: 'Nurse Practitioner',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ',
        },
    ],
    appointment: [
    ]
}) 