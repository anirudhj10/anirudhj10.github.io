import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Github, GithubIcon, Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            Anirudh Jagadish
            <div className="text-sm font-thin flex justify-between items-center">
                @anirudhj10
                <Link
                    className="block md:hidden"
                    href=""
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Github />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
