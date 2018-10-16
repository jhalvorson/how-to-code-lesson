<template>
  <div>
    <!--
     1. Complete your profile
     2. Write some JSON to make a list of people
     3. Loop over that JSON
    -->
    <Profile
      v-for="person in people"
      :key="person.name"
      :name="person.name"
      :role="person.role"
      avatar="person.avatar"
    />
  </div>
</template>

<script>
import Profile from "../components/Profile";

export default {
  name: "Team",
  components: {
    Profile
  },
  data() {
    return {
      // "People" is an ARRAY of OBJECTS
      // an Array is simply an ordered list of items, we call an array an iterrable
      // since we can iterrate or loop over it. An array is indicated by square brackets []
      // an Object is a way of storing information in a structured format, its indicated
      // by curly braces, eg:
      //  {
      //   name: 'Frightened Rabbit',
      //   studio_albums: 5
      //  }
      // we can access all properties in the object, eg bands.name = Frightened Rabbit
      people: [ // Array
        { // Object
          name: 'Jamie Halvorson',
          avatar: { // Objects can be nested
            url: '',
            alt: ''
          },
          role: ''
        },
        {
          name: 'Rachel Smith',
          avatar: {
            url: '',
          }
        },
        {
          name: 'Rachel Smiths',
          avatar: {
            url: '',
          }
        }
     ]
    }
  }
};
</script>

<style>

</style>
