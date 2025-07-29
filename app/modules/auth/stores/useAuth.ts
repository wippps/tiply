import { defineStore } from "pinia";
import { useHttp } from "~/api/useHttp";
import { useRouter } from 'vue-router';

interface IUser {
    act: string,
    username: string,
    password: string,
    type: string
}


export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const login = async (user: IUser) => {
        try {
            const { data } = await useHttp('/index.php', {
                method: 'POST',
                body: JSON.stringify(user),
            })
            
            if (data.status === 'active') {
                const tokenCookie = useCookie('token'); 
                tokenCookie.value = data.token;

                
                const roleCookie = useCookie('role');
                roleCookie.value = data.role;

                await router.push('/donation');
            } else {
                throw new Error('Неверные данные');
            }

        } catch (e) {
            throw e
        }
    }

    return { login }
})