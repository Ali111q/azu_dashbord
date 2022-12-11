const AppName = 'azu';
const Url = 'http://home.azu-app.com/';

const DR_addImg = `${Url}api/addPhoto`;
const DR_addDr = `${Url}api/addDoctor`;
const DR_getAllDr = `${Url}api/getDoctors`;
const DR_id_getDoctor =(Dr_id)=> {return `${Url}api/getDoctor/${Dr_id}`};
const DR_updateDoctor =(Dr_id)=> {return `${Url}api/updateDoctor/${Dr_id}`};
const DR_deleteDoctor =(Dr_id)=> {return `${Url}api/deleteDoctor/${Dr_id}`};



const addClinic = `${Url}api/addClinic`;
const getClinics = `${Url}api/getClinics`;
const getClinic =(Clinic_id)=> {return `${Url}api/getClinic/${Clinic_id}`};
const updateClinic =(Clinic_id)=> {return `${Url}api/updateClinic/${Clinic_id}`};
const deleteClinic =(Clinic_id)=> {return `${Url}api/deleteClinic/${Clinic_id}`};


const addBlog = `${Url}api/addBlog`;
const getBlogs = `${Url}api/getBlogs`;
const getBlog =(Clinic_id)=> {return `${Url}api/getBlog/${Clinic_id}`};
const updateBlog =(Clinic_id)=> {return `${Url}api/updateBlog/${Clinic_id}`};
const deleteBlog =(Clinic_id)=> {return `${Url}api/deleteBlog/${Clinic_id}`};

const addSwiper = `${Url}api/addSwiper`;
const getSwipers = `${Url}api/getSwipers`;
const getSwiper =(Swiper_id)=> {return `${Url}api/getSwiper/${Swiper_id}`};
const updateSwiper =(Swiper_id)=> {return `${Url}api/updateSwiper/${Swiper_id}`};
const deleteSwiper =(Swiper_id)=> {return `${Url}api/deleteSwiper/${Swiper_id}`};

const addDo = `${Url}api/addDo`;
const getDos = `${Url}api/getDos`;
const getDo =(do_id)=> {return `${Url}api/getDo/${do_id}`};
const updateDo =(do_id)=> {return `${Url}api/updateDo/${do_id}`};
const deleteDo =(do_id)=> {return `${Url}api/deleteDo/${do_id}`};




const addServies = `${Url}api/addServies`;
const getServiess = `${Url}api/getServiess`;
const getServies =(Servies_id)=> {return `${Url}api/getServies/${Servies_id}`};
const updateServies =(Servies_id)=> {return `${Url}api/updateServies/${Servies_id}`};
const deleteServies =(Servies_id)=> {return `${Url}api/deleteServies/${Servies_id}`};




const addTeam = `${Url}api/addTeam`;
const getTeams = `${Url}api/getTeams`;
const getTeam =(Team_id)=> {return `${Url}api/getTeam/${Team_id}`};
const updateTeam =(Team_id)=> {return `${Url}api/updateTeam/${Team_id}`};
const deleteTeam =(Team_id)=> {return `${Url}api/deleteTeam/${Team_id}`};




const addClient = `${Url}api/addClient`;
const getClients = `${Url}api/getClients`;
const getClient =(Team_id)=> {return `${Url}api/getClient/${Team_id}`};
const updateClient =(Team_id)=> {return `${Url}api/updateClient/${Team_id}`};
const deleteClient =(Team_id)=> {return `${Url}api/deleteClient/${Team_id}`};




const addAd = `${Url}api/addAd`;
const getAds = `${Url}api/getAds`;

const updateAd =(Team_id)=> {return `${Url}api/updateAd/${Team_id}`};

const getAd =(Team_id)=> {return `${Url}api/getAd/${Team_id}`};

const addLogin = `${Url}api/addLogin`;
const getLogins = `${Url}api/getLogins`;
const getLogin =(Team_id)=> {return `${Url}api/getLogin/${Team_id}`};
const updateLogin =(Team_id)=> {return `${Url}api/updateLogin/${Team_id}`};
const deleteLogin =(Team_id)=> {return `${Url}api/deleteLogin/${Team_id}`};

const addFaq = `${Url}api/addFaq`;
const getFaqs = `${Url}api/getFaqs`;
const getFaq =(Team_id)=> {return `${Url}api/getFaq/${Team_id}`};
const updateFaq =(Team_id)=> {return `${Url}api/updateFaq/${Team_id}`};
const deleteFaq =(Team_id)=> {return `${Url}api/deleteFaq/${Team_id}`};


export {
    DR_getAllDr,
    DR_addDr,
    DR_deleteDoctor,
    DR_updateDoctor,
    DR_id_getDoctor,
    addClinic,
    getClinics,
    getClinic,
    updateClinic,
    deleteClinic,
    addBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
    addSwiper,
    getSwipers,
    getSwiper,
    updateSwiper,
    deleteSwiper,
    addDo,
    getDos,
    getDo,
    updateDo,
    deleteDo,
    addServies,
    getServiess,
    getServies,
    updateServies,
    deleteServies,
    addTeam,
    getTeams,
    getTeam,
    updateTeam,
    deleteTeam,
    addClient,
    getClients,
    getClient,
    updateClient,
    deleteClient,
    getAds,
    updateAd,
    addAd,
    getAd,
    addLogin,
    getLogins,
    getLogin,
    updateLogin,
    deleteLogin,
    addFaq,
    getFaqs,
    getFaq,
    updateFaq,
    deleteFaq,

}