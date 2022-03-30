<template>
<div class="bg-sl-primary app-body">
    <div class="d-flex align-items-center justify-content-center ht-100v">
      <Spinner v-if="showSpiner"/>
      <div class="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white" v-else>
          <!-- alert -->
          <div class="alert alert-danger" v-if="alert" role="alert">
                <button @click="close" type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="d-flex align-items-center justify-content-start">
                    <i class="icon ion-ios-close alert-icon tx-32 mg-t-5 mg-xs-t-0"></i>
                    <span><strong>Sorry!</strong> {{ errodata }}</span>
                </div><!-- d-flex -->
            </div>
            <!-- alert end -->
        <form @submit.prevent="submit">
            <div class="signin-logo tx-center tx-24 tx-bold tx-inverse">Login <span class="tx-info tx-normal">admin</span></div>
            <div class="tx-center mg-b-60">Professional  Design</div>

            <div class="form-group">
            <input type="text" required v-model="form.email" class="form-control" placeholder="Enter your username">
            </div><!-- form-group -->
            <div class="form-group">
            <input type="password" required v-model="form.password" class="form-control" placeholder="Enter your password">
            <a href="" class="tx-info tx-12 d-block mg-t-10">Forgot password?</a>
            </div><!-- form-group -->
            <button type="submit" class="btn btn-info btn-block">Sign In</button>

            <div class="mg-t-60 tx-center">Not yet a member?
                  <router-link to="/register" class="tx-info">Sign Up</router-link>
            </div>
        </form>
      </div><!-- login-wrapper -->
    </div>
</div>
</template>

<script>
import Spinner from '../../components/spinner.vue'
import { mapActions } from 'vuex'
export default {
    name:'Login',
    components:{
        Spinner,
    },
    mounted() {
        if(this.$store.state.token !== ''){
            axios.post('checkToken',{ token : this.$store.state.token })
            .then((res)=>{
                if(res){
                    this.showSpiner=true
                    this.$router.push('/dashboard');
                }
            }).catch((err)=>{
                this.showSpiner=false
                this.$store.commit('clearToken');
            })
        }
    },
    data(){
        return({
            showSpiner : true,
            form:{
                email: '',
                password: '',
            },
            showError: false,
            alert:false,
            errodata:'',
        })

    },
    beforeMount(){
         setTimeout(this.showData, 400);
    },
    methods:{

      showData(){
        this.showSpiner=false
      },
      async submit(){

          await axios.post('login',this.form)
          .then((res)=>{
                this.showSpiner=true
                this.$store.commit('setToken',res.data.token)
                this.$router.push('/dashboard');
          }).catch((er)=>{
              this.alert=true
              this.errodata="unauthorized.Try again"
              console.log(er.data)
          })
           this.showSpiner=false

      },
      close:function(){
          this.alert=false
      },
      validation(){
          if(form.email == ''|| null || undefined){
              this.alert=true;
              this.errodata="email required";
          }
           if(form.password == ''|| null || undefined){
              this.alert=true;
              this.errodata="password required";
          }
      }
    }
}
</script>


<style>

</style>
