const app = Vue.createApp({
  data() {
    return {
      users: [],
      name: "Olayemi A.",
      // lastName: "A",
      email: "olayemiA@gmail.com",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      avatarImages: [],
      // gender: "male",
      phone: +234807854377,
      address:"4, Henry Carr Road, Akoka, Lagos",
      website: "ymzotx.tech",
      company: "YmzoTech",
    };
  },
  computed: {
    formattedAddress() {
      return this.users.map((user) => {
        return `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
      });
    },
  },
  methods: {
    async getUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.users = data.slice(0, 10);

      // const resp = await fetch("https://randomuser.me/api/portraits");

      // const pic = await resp.json();

      // const avatar = pic.results[0].picture.large;
      const pageProfile = data[0];
      // const pageProfile2 = data
      console.log(pageProfile);

      this.name = pageProfile.name;
      // const  = address
      // this.address = pageProfile.address.{ Street, suite, city, zipcode };
      // this.address = `${pageProfile.address.suite},${pageProfile.address.street} , ${pageProfile.address.city} , ${pageProfile.address.zipcode}` ;
      this.email = pageProfile.email;
      this.phone = pageProfile.phone;
      this.company = pageProfile.company.name;
      this.website = pageProfile.website;


      const avatars = await Promise.all(this.users.map(async (user) => {
        const resp = await fetch("https://randomuser.me/api");
        const pic = await resp.json();
        return pic.results[0].picture.large;
      }));
      this.avatarImages = avatars;
    },
    // async getAvatar() {
    //   const resp = await fetch("https://randomuser.me/api");
    //   const pic = await resp.json();
    //   const avatar = pic.results[0];
    //   this.users = pic.slice(0, 10);
    //   this.avatarImage = avatar.picture.large;
    // }
  },
});

app.mount("#app");