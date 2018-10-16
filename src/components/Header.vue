<template>
  <header>
    <h1>Amiqus</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/our-team">Team</router-link></li>
      </ul>
    </nav>
    <router-link class="instructions-link" to="/Instructions">Instructions</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  header {
    display: flex;
    align-items: center;

    h1 {
      font-size: 22px;
      margin: 0;
    }
    
    ul {
      list-style-type: none;
      display: flex;
      margin: 0;

      li {
        padding: 5px;
      }
    }
  }

  .instructions-link {
    background-color: #D9ECFA;
    color: #ADBCCA;
    border-radius: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding-top: 5px; // shorthand would be padding: 5px 18px;
    padding-right: 18px;
    padding-bottom: 5px;
    padding-left: 18px;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
  }
</style>
