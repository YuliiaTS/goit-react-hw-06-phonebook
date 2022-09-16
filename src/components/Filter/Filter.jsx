import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from './../../redux/contact/actions';
import { getFilter } from './../../redux/contact/filter';
import style from '../Filter/Filter.module.css';

export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={style.label}>
        Find contact by name
        <input type="text" name="filter" value={filter} onChange={e => dispatch(changeFilter(e.target.value))}/>
        </label>
    );
}
