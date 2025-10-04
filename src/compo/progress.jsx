import { ProgressBar } from 'primereact/progressbar';

function Progress() {
    return (
        <div className="card">
            <br />
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        </div>
    );
}

export default Progress 