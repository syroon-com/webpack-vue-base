<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <button
      @click="clickButton"
    >
      Send
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  created: function () {
    console.log('a is: ' + this.a)
    this.$socket.emit('hello', this.message)
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', data)
    }
  }
}
</script>

<style lang="css" scoped>
    h1 {
        color: red
    }
</style>
