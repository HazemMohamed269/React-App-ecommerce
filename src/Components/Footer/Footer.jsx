import "./Footer.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={assets.logo}
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            corporis eveniet in laborum beatae molestias voluptatibus totam quo
            est similique.
          </motion.p>
          <div className="footer-social-icon">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={assets.facebook_icon}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src={assets.twitter_icon}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>

        <div className="footer-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            COMPANY
          </motion.h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              About-Us
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              Delivery
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              Privacy-Police
            </motion.li>
          </ul>
        </div>

        <div className="footer-right">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            GET IN TOUCH
          </motion.h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              +1-212-456-987
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Contact@Tomato.com
            </motion.li>
          </ul>
        </div>
      </div>
      <hr />
      <motion.p
        className="footer-copyright"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        copyright@HAZEM MOHAMED
      </motion.p>
    </div>
  );
}

export default Footer;
