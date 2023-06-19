<template>
    <div>
        <aside>
            <div class="top-admin">
                <div class="logo-admin">
                    <i class="ri-roadster-fill"></i><h2>Express<span class="danger">Rent a Car</span></h2>
                </div>

                <div class="close-admin" id="close-btn">
                    <span class="material-icons-sharp">close</span>
                </div>
            </div>

            <div class="sidebar-admin">
                <a href="#">
                    <span class="material-icons-sharp">grid_view</span>     
                    <h3>Dashboard</h3> 
                </a>
                <a href="#" class="active">
                    <span class="material-icons-sharp">person</span>  
                    <h3>Customers</h3> 
                </a>
                <a href="#">
                    <span class="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3> 
                </a>
                <a href="#">
                    <span class="material-icons-sharp">insights</span>       
                    <h3>Analytics</h3> 
                </a>
                <a href="#">
                    <span class="material-icons-sharp">mail</span> 
                    <h3>Messages</h3> 
                    <span class="message-count">20</span>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">inventory</span>   
                    <h3>Product</h3> 
                </a>
                <a href="#">
                    <span class="material-icons-sharp">report</span>
                    <h3>Report</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">settings</span>     
                    <h3>Settings</h3> 
                </a>
                <a href="#">
                    <span class="material-icons-sharp">add</span>    
                    <h3>Add Product</h3> 
                </a>
                <a>
                    <span class="material-icons-sharp">logout</span>    
                    <h3>Logout</h3> 
                </a>
            </div>
        </aside>
    </div>
</template>
<script>
    export default {
        name: 'Aside'
    }
</script>

<style scoped>
    @import '@/Styles/AdminDashboard/AdminDashboard.sass';
    @import '@/Styles/AdminDashboard/DashboardComponents/Aside.sass';
</style>