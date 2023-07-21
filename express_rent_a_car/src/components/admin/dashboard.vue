<template>
    <div>
        <div class="wrapper">
            <aside id="sidebar" v-show="isSidebarCollapsed" >
                <div class="h-100">
                    <div class="navbar-logo">
                        <router-link to="#">
                            <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                        </router-link>
                    </div>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Páginas
                        </li>

                        <li class="sidebar-item" :class="{ 'active': currentComponent === 'dashboard' }">
                            <a href="#" class="sidebar-link" @click="showDashboard">
                                <i class="ri-dashboard-fill"></i>
                                Dashboard
                            </a>
                        </li>

                        <li class="sidebar-item" :class="{ 'active': currentComponent === 'EditarPerfil' }">
                            <a href="#" class="sidebar-link" @click="showEditarPerfil">
                                <i class="fa-regular fa-user"></i>
                                Editar Perfil
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link has-dropdown" @click="toggleConfig">
                                <i class="fa-solid fa-user-gear"></i>
                                Configurações
                                <i class="ri-arrow-down-s-line" id="down" v-if="!showConfig"></i>
                                <i class="ri-arrow-up-s-line" id="down" v-if="showConfig"></i>
                            </a>
                            
                            <ul class="sidebar-dropdown" v-show="showConfig">
                                <li class="sidebar-item">
                                    <a href="/login" class="sidebar-link">
                                        Sair
                                    </a>
                                    <a href="http://localhost:8080/" class="sidebar-link">
                                        Ver como cliente
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="sidebar-header">
                            Pedidos
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link has-dropdown" @click="toggleReserva">
                                <i class="ri-survey-line"></i>
                                Reservas
                                <i class="ri-arrow-down-s-line" id="down" v-if="!showReserva"></i>
                                <i class="ri-arrow-up-s-line" id="down" v-if="showReserva"></i>
                            </a>
                            
                            <ul class="sidebar-dropdown" v-show="showReserva" >
                                <li class="sidebar-item" >
                                    <a href="#" class="sidebar-link" @click="showSolicitacao" :class="{ 'active': currentComponent === 'Solicitacao' }">
                                        Solicitação
                                    </a>
                                    <a href="#" class="sidebar-link" @click="showCancelados" :class="{ 'active': currentComponent === 'Cancelados' }">
                                        Cancelados
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="sidebar-header">
                            Carros
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link has-dropdown" @click="toggleFrota">
                                <i class="ri-car-line"></i>
                                Frota 
                                <i class="ri-arrow-down-s-line" id="down" v-if="!showFrota"></i>
                                <i class="ri-arrow-up-s-line" id="down" v-if="showFrota"></i>
                            </a>
                            
                            <ul class="sidebar-dropdown" v-show="showFrota">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link" @click="showAddVeiculo" :class="{ 'active': currentComponent === 'AddVeiculo' }">
                                        Adicionar veiculo 
                                    </a>
                                    <a href="#" class="sidebar-link" @click="showListaDeVeiculos" :class="{ 'active': currentComponent === 'ListaDeVeiculos' }">
                                        Lista de veiculos
                                    </a>
                                    <a href="#" class="sidebar-link" @click="showVeiculosDisponivel" :class="{ 'active': currentComponent === 'VeiculosDisponivel' }">
                                        Veiculos Disponível
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="sidebar-header">
                            Contrato
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link has-dropdown" @click="toggleContrato">
                                <i class="ri-draft-fill"></i>
                                Termos e Politicas
                                <i class="ri-arrow-down-s-line" id="down" v-if="!showContrato"></i>
                                <i class="ri-arrow-up-s-line" id="down" v-if="showContrato"></i>
                            </a>
                            
                            <ul class="sidebar-dropdown" v-show="showContrato">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link" @click="showTermos" :class="{ 'active': currentComponent === 'Termos' }">
                                        Termos
                                    </a>
                                    <a href="#" class="sidebar-link" @click="showPoliticas" :class="{ 'active': currentComponent === 'Politicas' }">
                                        Politica
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="main">
                <nav class="dashboard-navbar">
                    <button type="button" class="toggle-btn" @click="toggleSidebar">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>

                    <form action="#">
                        <div class="nav-search">
                            <input type="text" class="search-query" placeholder="Search...">
                            <span class="search-icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <button class="btn" type="button">Search</button>
                        </div>
                    </form>

                    <div class="navbar-content">
                        <ul class="main-navbar">
                            <li class="user-link">
                                <a href="#" class="user-profile" @click="toggleUserDropdown">
                                    <img :src="userProfile" alt="Profile" class="avatar">
                                </a>
                                <div class="user-link-dropdown" v-show="isUserDropdownOpen">
                                    <a href="#" class="dropdown-item">Profile</a>
                                    <a href="#" class="dropdown-item">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="content">
                    <div class="dashboard-container" v-if="currentComponent === 'dashboard'">
                        <h4>Admin Dashboard</h4>
            
                        <div class="dashboard-row">
                            <div class="dashboard-card">
                                <div class="greeting">
                                    <div class="greeting-content">
                                        <h3>Bem-vindo de volta, Admin!</h3>
                                        <p>Artur Rent a car</p>
                                    </div>
                
                                    <div class="greeting-img">
                                        <img :src="greeting">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-card">
                                <div class="revenue">
                                    <div class="revenue-info">
                                        <h3>AOA 24.000kz</h3>
                                        <p>Total ganho no mês</p>
                                        <div class="badge">
                                            <span class="text-sucess-bg">+5.85%</span>
                                            <span class="badge-text">Em relação ao mês passado</span>
                                        </div>
                                    </div>
                                    <div class="stat">
                                        <i class="fa-solid fa-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Admin Dashboard Table</h4>
                        <table id="posts">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>B.I</th>
                                    <th>Viatura</th>
                                    <th>Duração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Raúl</td>
                                    <td>raulmigueleb7@gmail.com</td>
                                    <td>932157393</td>
                                    <td>123456789LA22</td>
                                    <td>Fiat500</td>
                                    <td>24h</td>
                                </tr>
                        
                                <tr>
                                    <td>Raúl</td>
                                    <td>raulmigueleb7@gmail.com</td>
                                    <td>932157393</td>
                                    <td>123456789LA22</td>
                                    <td>Fiat500</td>
                                    <td>24h</td>
                                </tr>

                                <tr>
                                    <td>Raúl</td>
                                    <td>raulmigueleb7@gmail.com</td>
                                    <td>932157393</td>
                                    <td>123456789LA22</td>
                                    <td>Fiat500</td>
                                    <td>24h</td>
                                </tr>
                
                                <tr>
                                    <td>Raúl</td>
                                    <td>raulmigueleb7@gmail.com</td>
                                    <td>932157393</td>
                                    <td>123456789LA22</td>
                                    <td>Fiat500</td>
                                    <td>24h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!--Editar Perfil-->
                    <EditarPerfil v-else-if="currentComponent === 'EditarPerfil'"  />

                    <!--Frota-->
                    <AddVeiculo v-else-if="currentComponent === 'AddVeiculo'"/> 
                    <ListaDeVeiculos v-else-if="currentComponent === 'ListaDeVeiculos'"/> 
                    <VeiculosDisponivel v-else-if="currentComponent === 'VeiculosDisponivel'"/>

                    <!--Reservas-->
                    <Solicitacao v-else-if="currentComponent === 'Solicitacao'"/>
                    <Cancelados v-else-if="currentComponent === 'Cancelados'"/>

                    <!--Termos & Politicas-->
                    <Termos v-else-if="currentComponent === 'Termos'"/>
                    <Politicas v-else-if="currentComponent === 'Politicas'"/>
                </main>
                
                <footer>
                    <div class="dashboard-container">
                        <div class="dashboard-row">
                            <div class="footer-content footer-brand">
                                <router-link to="/">
                                    <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                                </router-link>
                            </div>
        
                        <div class="footer-content footer-nav">
                                <ul class="footer-link">
                                    <li class="footer-link-item">
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </li>
                                    <li class="footer-link-item">
                                        <a href="#"><i class="bx bxl-facebook"></i></a>
                                    </li>
                                    <li class="footer-link-item">
                                        <a href="#"><i class="bx bxl-instagram"></i></a>
                                    </li>
                                    <li class="footer-link-item">
                                        <a href="#"><i class="bx bxl-whatsapp"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </footer>

                <!--Theme Switch-->
                    <button class="theme-toggle" @click="toggleTheme">
                        <i class="fas fa-moon"></i>
                        <i class="fas fa-sun"></i>
                    </button>
                </div>
            </div>
        </div>
</template>
  
<script>
    import AddVeiculo from '@/components/admin/Frota/AddVeiculo.vue'
    import ListaDeVeiculos from '@/components/admin/Frota/ListaDeVeiculos.vue'
    import VeiculosDisponivel from '@/components/admin/Frota/VeiculosDisponivel.vue'
    import Solicitacao from '@/components/admin/Pedidos/Solicitacao.vue'
    import Cancelados from '@/components/admin/Pedidos/Cancelados.vue'
    import EditarPerfil from '@/components/admin/EditarPerfil/EditarPerfil.vue'
    import Termos from '@/components/admin/TermosEPoliticas/Termos.vue'
    import Politicas from '@/components/admin/TermosEPoliticas/Politicas.vue'
    export default {
        name: 'dashboard',
        components: {
            AddVeiculo,
            ListaDeVeiculos,
            VeiculosDisponivel,
            Solicitacao,
            Cancelados,
            EditarPerfil,
            Termos,
            Politicas
        },
        data() {
            return {
                isSidebarCollapsed: true,
                showFrota: false,
                showReserva: false,
                showConfig: false,
                showContrato: false,
                userProfile: require('@/assets/img/userPerfil.png'), // Replace with your image path
                greeting: require('@/assets/img/admin.png'),
                currentComponent: 'dashboard'
            };
        },

        methods: {
            toggleSidebar() {
                this.isSidebarCollapsed = !this.isSidebarCollapsed;
            },

            toggleTheme() {
                const rootElement = document.querySelector(":root");
                rootElement.classList.toggle("light");
                this.toggleLocalStorageItem();
            },
            isLight() {
                return localStorage.getItem("light-theme");
            },
            toggleLocalStorageItem() {
                if (this.isLight()) {
                localStorage.removeItem("light-theme");
                } else {
                localStorage.setItem("light-theme", "set");
                }
            },
            toggleFrota() {
                this.showFrota = !this.showFrota;
                this.showReserva = false;
                this.showConfig = false;
                this.showContrato = false;
            },
            toggleReserva() {
                this.showReserva = !this.showReserva;
                this.showFrota = false;
                this.showConfig = false;
                this.showContrato = false;
            },
            toggleConfig() {
                this.showConfig = !this.showConfig;
                this.showFrota = false;
                this.showReserva = false;
                this.showContrato = false;
            },
            toggleContrato() {
                this.showContrato = !this.showContrato;
                this.showFrota = false;
                this.showReserva = false;
                this.showConfig = false;
            },
            showDashboard(){
                this.currentComponent = 'dashboard';
            },
            showEditarPerfil(){
                this.currentComponent = 'EditarPerfil';
            },
            showAddVeiculo(){
                this.currentComponent = 'AddVeiculo';
            },
            showListaDeVeiculos(){
                this.currentComponent = 'ListaDeVeiculos';
            },
            showVeiculosDisponivel(){
                this.currentComponent = 'VeiculosDisponivel';
            },
            showSolicitacao(){
                this.currentComponent = 'Solicitacao';
            },
            showCancelados(){
                this.currentComponent = 'Cancelados';
            },
            showTermos(){
                this.currentComponent = 'Termos';
            },
            showPoliticas(){
                this.currentComponent = 'Politicas';
            }
        },
        mounted() {
            if (this.isLight()) {
            this.toggleTheme();
            }
        },
    };
</script>

  

<style scoped>
    @import '@/Styles/Admin/dashboard.sass';
</style>