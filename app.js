const app = Vue.createApp({
  data() {
    return {
      name: "Olayemi A.",
      // lastName: "A",
      email: "olayemiA@gmail.com",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      // gender: "male",
      phone: +234807854377,
      address:"4, Henry Carr Road, Akoka, Lagos",
      website: "ymzotx.tech",
      company: "YmzoTech",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const pageProfile = data[0];
      console.log(pageProfile);

      this.name = pageProfile.name;
      // const  = address
      // this.address = pageProfile.address.{ Street, suite, city, zipcode };
      this.address = `${pageProfile.address.suite},${pageProfile.address.street} , ${pageProfile.address.city} , ${pageProfile.address.zipcode}` ;
      this.email = pageProfile.email;
      this.phone = pageProfile.phone;
      this.picture = pageProfile.picture.large;
      // this.gender = pageProfile.gender;
      this.address = pageProfile.address;
      this.company = pageProfile.company.name;
      this.website = pageProfile.website;
    },
  },
});

app.mount("#app");