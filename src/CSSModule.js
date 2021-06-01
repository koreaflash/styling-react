//import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const CSSModule = () => {
    const cx = classNames.bind(styles);
    return (
        <div>
            <div className={styles.wrapper}>
                안녕하세요, 저는 <span className="something">CSS Module</span>
            </div>
            <div className={`${styles.wrapper} ${styles.inverted}`}>
                안녕하세요, 저는 <span className="something">CSS Module</span>
            </div>
            <div className={cx('wrapper', 'inverted')}>
                안녕하세요, 저는 <span className="something">CSS Module</span>
            </div>
        </div>
    );
}

export default CSSModule;