import "./AppDownload.css"
import { assets } from "../../assets/assets"
import { motion } from "framer-motion"
function AppDownload() {
    return (
        <div className="app-download" id="app-download">
            <motion.p initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                For Better Experience Download <br /> Tomato App
            </motion.p>
            <div className="app-download-platforms">
                <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} src={assets.play_store} alt="" />
                <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} src={assets.app_store} alt="" />
            </div>
        </div>
    );
}

export default AppDownload
