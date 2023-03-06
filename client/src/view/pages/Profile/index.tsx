import { useEffect, useState } from 'react';
import { https } from '../../../api';

const Profile = () => {
    const [data, setData] = useState<{username: string, email: string}>();

    useEffect(() => {
        https(`/api/user/me`).then((res) => setData(res.data));
    }, []);

    if (data) {
        return (
            <div className="container">
                <div>
                    <div> Username: {data?.username}</div>
                    <div> Email: {data?.email}</div>
                </div>
            </div>
        );
    } else {
        return <>Error</>;
    }
};

export default Profile;
