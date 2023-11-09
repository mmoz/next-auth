

type CardContentProps = {
    content: string;
};

export default function CardContent({ content }: CardContentProps) {
    return (
        <>
            <div className="flex-col">
                <img src="https://images.unsplash.com/photo-1695653422909-20d8cc35ca2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div>
                    <span className="font-bold text-md line-clamp-2">{content}</span>
                </div>
            </div>
        </>
    );
    
}