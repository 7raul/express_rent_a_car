<template>
    <div>
        <aside id="sidebar" ref="sidebarRef" @click="dropdownToggle">
            <div class="h-100">
                <div class="sidebar-logo">
                    <a href="#">
                        <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                    </a>
                </div>

                <ul class="sidebar-nav">
                    <li class="sidebar-header">
                        Páginas
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-regular fa-user"></i>
                            Perfil
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-solid fa-list"></i>
                            Tarefas
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link has-dropdown">
                            <i class="fa-solid fa-user-gear"></i>
                            Reservas
                        </a>
                        
                        <ul class="sidebar-dropdown">
                            <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                                    Reservados
                                </a>
                                <a href="#" class="sidebar-link">
                                    Cancelados
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-header">
                        Tools & Components
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link has-dropdown">
                            <i class="fa-solid fa-car"></i>
                            Veiculos
                        </a>
                        
                        <ul class="sidebar-dropdown">
                            <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                                    Cadastrar
                                </a>
                                <a href="#" class="sidebar-link">
                                    Cadastrados
                                </a>
                                <a href="#" class="sidebar-link">
                                    Divulgados
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-regular fa-bell"></i>
                            Notificações
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <h2>Main</h2>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: 'Navbar',

        setup(){
            const sidebarRef = ref(null);
            const items = ref(null);

            function dropdownToggle(){
                const link = event.target.classList.contains('active');
                items.value.forEach((item) => {
                    item.classList.remove('active');
                });
                if (!link) {
                    event.target.classList.add('active');
                }
            }

            return {
                sidebarRef,
                items,
                dropdownToggle,
            };
        },

        mounted() {
            this.items = this.sidebarRef.querySelectorAll('.has-dropdown');
        },
    }
</script>

<style scoped>
    @import './Style.sass';
    @import '@/Styles/AdminDashboard/AdminDashboard.sass';
</style>