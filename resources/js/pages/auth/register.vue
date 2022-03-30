<template>
<div class="bg-sl-primary app-body">
    <div class="d-flex align-items-center justify-content-center ht-100v">
      <Spinner v-if="showSpiner"/>
      <div class="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white" v-else>

        <div class="signin-logo tx-center tx-24 tx-bold tx-inverse">Registration <span class="tx-info tx-normal">admin</span></div>
        <div class="tx-center mg-b-40">Professional  Design</div>

        <div class="form-group">
          <input type="text" class="form-control" v-model="form.name" placeholder="Enter your username">
        </div><!-- form-group -->

        <div class="form-group">
          <input type="text" class="form-control" v-model="form.email" placeholder="Enter your email">
        </div><!-- form-group -->

        <div class="form-group">
          <input type="password" class="form-control" v-model="form.password" placeholder="Enter your password">
          <!-- <a href="" class="tx-info tx-12 d-block mg-t-10">Forgot password?</a> -->
        </div><!-- form-group -->
        <div class="form-group">
          <input type="password" class="form-control" v-model="form.repassword" placeholder="Re-enter password">
          <!-- <a href="" class="tx-info tx-12 d-block mg-t-10">Forgot password?</a> -->
        </div><!-- form-group -->
        <button type="submit" class="btn btn-info btn-block">Sign Up</button>

        <div class="mg-t-60 tx-center">Not yet a member?
             <router-link to="/login" class="tx-info">sign in</router-link> </div>
      </div><!-- login-wrapper -->
    </div>
</div>
</template>

<script>
import Spinner from '../../components/spinner.vue'
export default {
    components:{
        Spinner,
    },
    data(){
        return({
            showSpiner : true,
             form:{
                name: '',
                email: '',
                password: '',
                repassword: ''
            },
            showError: false,
        })

    },
    beforeMount(){
         setTimeout(this.showData, 400);
    },
    methods:{
      showData(){
        this.showSpiner=false
      }
    }
}
</script>

<style>

</style>
