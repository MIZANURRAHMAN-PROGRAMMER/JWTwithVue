import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'


Vue.use(vuex)

export default new vuex.Store(
    {
        state:{
            status:'',
            token: localStorage.getItem('token') || '',
            user :{},
            error : '',
        },
        mutations:{
            auth_request(state){
                state.status='loading'
            },
            auth_success(state,token){
                state.status='sucess'
                state.token=token
            },
            set_user(state,user){
                state.user=user
            },
            handle_error(state,error){
                state.error=error
            },
            logout(state){
                state.status=""
            }
        },
        actions:{
            login({commit},user){
                return new Promise((resolve,reject) =>{
                    commit('auth_request')
                    axios.Cancel({url: 'login',data: user, method:'POST'})
                    .then(resp =>{
                        const token='Bearer'+resp.data.access_token
                        const user=resp.data.user
                        localStorage.setItem('token',token)
                        commit('auth_success',token,user)
                        commit('set_user',user)
                        commit('handle_error','')
                        console.log('hi')
                        resolve(resp)
                    })
                    .catch(err=>{
                        localStorage.removeItem('token')
                        reject(err)
                    })
                })
            },
            Register({commit},user){
                return new Promise((resolve,reject)=>{
                    commit('auth_request')
                    axios({url:'register',data: user, method: 'POST'})
                    .then(resp =>{
                        const token = 'Bearer' +resp.data.access_token
                        const user=resp.data.user
                        localStorage.setItem('token',token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success',token,user)
                        commit('handle_error','')
                        resolve(resp)
                    }).catch(error =>{
                        localStorage.removeItem('token')
                        reject(error)
                    })
                })
            },
            logout({commit}){
                return new Promise((resolve,reject) =>{
                    commit('logout')
                    localStorage.removeItem('token')
                    delete axios.defaults.headers.common['Authorization']
                    resolve()
                });
            },
            getUser({commit}){
                return new Promise((resolve,reject)=>{
                    axios({url: 'user',method:'GET'}).then(res=>{
                        commit('set_user',res.data)
                        resolve(res)
                    })
                })
            }
        },
        getters:{
            isLoggedIn: state => !!state.token,
            authStatus: state => state.status,
            getUser: state => state.user,
            getError: state => state.error
        }
    }
)
